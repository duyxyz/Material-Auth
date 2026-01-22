import { escapeHtml } from './utils.js';
import TOTP from './otp-engine.js';

/**
 * UI Management for OTP Viewer
 */

export function renderAccounts(accounts, currentSearchQuery, onCopy, onReorder, onEdit, onDelete) {
    const emptyState = document.getElementById('emptyState');
    const accountsList = document.getElementById('accountsList');
    const noResults = document.getElementById('noResults');

    if (accounts.length === 0) {
        emptyState.style.display = 'flex';
        noResults.style.display = 'none';
        accountsList.innerHTML = '';
    } else {
        emptyState.style.display = 'none';

        accountsList.innerHTML = accounts.map((account, index) => {
            return `
      <div class="account-wrapper" data-index="${index}">
        <div class="swipe-actions">
          <div class="swipe-action edit"><span class="material-icons">edit</span><md-ripple></md-ripple></div>
          <div class="swipe-action delete"><span class="material-icons">delete</span><md-ripple></md-ripple></div>
        </div>
        <div class="account-item" data-index="${index}">
          <md-ripple></md-ripple>
          <div class="account-details-wrapper">
            <div class="account-info">
              <div class="account-name">${escapeHtml(account.issuer || account.name)}</div>
              ${account.issuer && account.name && account.issuer !== account.name ? `<div class="account-issuer">${escapeHtml(account.name)}</div>` : ''}
            </div>
            <div class="otp-display">
              <div class="otp-code" id="otp-${index}">------</div>
            </div>
          </div>
          <div class="otp-timer">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle class="timer-bg" cx="12" cy="12" r="10"></circle>
              <circle class="timer-progress" id="timer-${index}" cx="12" cy="12" r="10" transform="rotate(-90 12 12)"></circle>
            </svg>
          </div>
        </div>
      </div>
    `;
        }).join('');

        // Interaction Logic
        const list = document.getElementById('accountsList');

        // Prevent context menu on the entire list container - once is enough
        if (!list._hasContextMenuHandler) {
            list.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }, true);
            list._hasContextMenuHandler = true;
        }

        // --- Custom HTML5 Drag-and-Drop (no external library) ---
        // Clear previous listeners on wrappers
        document.querySelectorAll('.account-wrapper[draggable]').forEach(el => {
            if (el._dragStart) el.removeEventListener('dragstart', el._dragStart);
            if (el._dragOver) el.removeEventListener('dragover', el._dragOver);
            if (el._dragLeave) el.removeEventListener('dragleave', el._dragLeave);
            if (el._drop) el.removeEventListener('drop', el._drop);
            if (el._dragEnd) el.removeEventListener('dragend', el._dragEnd);
        });

        // Add drag listeners to each wrapper after rendering
        const wrappers = document.querySelectorAll('.account-wrapper');
        wrappers.forEach((el, idx) => {
            el.setAttribute('draggable', 'true');
            el.dataset.dragIndex = idx;
            const dragStart = (e) => {
                // Store index for drop
                e.dataTransfer.setData('text/plain', e.currentTarget.dataset.dragIndex);
                e.dataTransfer.effectAllowed = 'move';
                // Add class to wrapper for styling
                e.currentTarget.classList.add('dragging');

                const rect = e.currentTarget.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;
                // Create a clone to include pseudo‑elements / separator line
                const clone = e.currentTarget.cloneNode(true);
                // Copy computed border‑bottom (separator) if any
                const computed = getComputedStyle(e.currentTarget);
                if (computed.borderBottomWidth && computed.borderBottomStyle !== 'none') {
                    clone.style.borderBottom = `${computed.borderBottomWidth} ${computed.borderBottomStyle} ${computed.borderBottomColor}`;
                }
                clone.style.position = 'absolute';
                clone.style.top = '-9999px';
                clone.style.left = '-9999px';
                clone.style.width = rect.width + 'px';
                clone.style.height = rect.height + 'px';
                clone.style.boxSizing = 'border-box';
                clone.style.opacity = '1';
                clone.style.boxShadow = '0 6px 12px rgba(0,0,0,0.25)';
                clone.style.border = '1px solid var(--border-primary)';
                document.body.appendChild(clone);
                e.dataTransfer.setDragImage(clone, offsetX, offsetY);

                // Store clone on the element to remove it in dragEnd
                e.currentTarget._dragClone = clone;
            };
            const dragOver = (e) => {
                e.preventDefault();
                e.currentTarget.classList.add('drag-over');
            };
            const dragLeave = (e) => {
                e.currentTarget.classList.remove('drag-over');
            };
            const drop = (e) => {
                e.preventDefault();
                const sourceIdx = parseInt(e.dataTransfer.getData('text/plain'));
                const targetIdx = parseInt(e.currentTarget.dataset.dragIndex);
                if (sourceIdx !== targetIdx) {
                    // Get up‑to‑date wrappers after any previous moves
                    const currentWrappers = document.querySelectorAll('.account-wrapper');
                    const sourceEl = currentWrappers[sourceIdx];
                    const targetEl = e.currentTarget;
                    const parent = list; // accountsList container
                    if (sourceIdx < targetIdx) {
                        parent.insertBefore(sourceEl, targetEl.nextSibling);
                    } else {
                        parent.insertBefore(sourceEl, targetEl);
                    }
                    // Re‑assign dragIndex for all wrappers after DOM change
                    const updatedWrappers = document.querySelectorAll('.account-wrapper');
                    updatedWrappers.forEach((w, i) => {
                        w.dataset.dragIndex = i;
                    });
                    // Persist new order
                    onReorder();
                }
                document.querySelectorAll('.dragging, .drag-over').forEach(node => node.classList.remove('dragging', 'drag-over'));
            };
            const dragEnd = (e) => {
                const el = e.currentTarget;
                el.classList.remove('dragging');
                if (el._dragClone) {
                    if (el._dragClone.parentNode) el._dragClone.parentNode.removeChild(el._dragClone);
                    delete el._dragClone;
                }
                document.querySelectorAll('.dragging, .drag-over').forEach(node =>
                    node.classList.remove('dragging', 'drag-over')
                );
            };

            el.addEventListener('dragstart', dragStart);
            el.addEventListener('dragover', dragOver);
            el.addEventListener('dragleave', dragLeave);
            el.addEventListener('drop', drop);
            el.addEventListener('dragend', dragEnd);

        });

        // Global Context Menu Blocker (Capturing)
        const blockMenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        // Aggressive global blocker on the list container
        if (!list._hasGlobalBlocker) {
            list.addEventListener('contextmenu', blockMenu, true);
            list._hasGlobalBlocker = true;
        }

        document.querySelectorAll('.account-wrapper').forEach(wrapper => {
            const item = wrapper.querySelector('.account-item');
            const editAction = wrapper.querySelector('.swipe-action.edit');
            const deleteAction = wrapper.querySelector('.swipe-action.delete');

            let startX = 0;
            let moveX = 0;
            let checkSwipe = false;
            let isSwiping = false;

            const handleSwipeEnd = () => {
                if (!checkSwipe) return;
                checkSwipe = false;

                window.removeEventListener('mousemove', onSwipeMove);
                window.removeEventListener('mouseup', onSwipeEnd);
                window.removeEventListener('touchmove', onSwipeMove);
                window.removeEventListener('touchend', onSwipeEnd);
                if (rafId) cancelAnimationFrame(rafId);

                // Remove blocker with delay to prevent context menu from showing up after mouseup
                setTimeout(() => {
                    window.removeEventListener('contextmenu', blockMenu, true);
                }, 50);

                if (isSwiping) {
                    item.style.transition = 'all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1)';
                    const width = wrapper.offsetWidth;
                    const threshold = width / 2;
                    const idx = parseInt(wrapper.dataset.index);

                    if (moveX > threshold) {
                        onEdit(idx);
                    } else if (moveX < -threshold) {
                        onDelete(idx);
                    }
                }

                item.style.transform = '';
                editAction.style.opacity = 0;
                deleteAction.style.opacity = 0;
                isSwiping = false;
                item.classList.remove('no-active');
            };

            const onSwipeEnd = handleSwipeEnd;

            let rafId = null;
            const onSwipeMove = (e) => {
                if (!checkSwipe) return;

                // Stop if right button released 
                if (e.buttons !== undefined && (e.buttons & 2) === 0 && e.type.startsWith('mouse')) {
                    handleSwipeEnd();
                    return;
                }

                const clientX = (e.clientX !== undefined) ? e.clientX : (e.touches && e.touches[0].clientX);
                moveX = clientX - startX;

                if (!isSwiping && Math.abs(moveX) > 5) {
                    isSwiping = true;
                    item.style.transition = 'none';
                    item.classList.add('no-active');
                }

                if (isSwiping) {
                    if (e.cancelable) e.preventDefault();
                    if (rafId) cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame(() => {
                        item.style.transform = `translateX(${moveX}px)`;
                        if (moveX > 0) {
                            editAction.style.opacity = Math.min(moveX / 60, 1);
                            deleteAction.style.opacity = 0;
                        } else {
                            deleteAction.style.opacity = Math.min(Math.abs(moveX) / 60, 1);
                            editAction.style.opacity = 0;
                        }
                    });
                }
            };

            const handleSwipeStart = (e) => {
                startX = e.clientX || (e.touches && e.touches[0].clientX);
                moveX = 0;
                checkSwipe = true;
                isSwiping = false;

                window.addEventListener('mousemove', onSwipeMove);
                window.addEventListener('mouseup', onSwipeEnd);
                window.addEventListener('touchmove', onSwipeMove, { passive: false });
                window.addEventListener('touchend', onSwipeEnd);
                window.addEventListener('contextmenu', blockMenu, true);
            };

            // Permanent block on item to catch early right clicks
            const preventContext = (e) => {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            item.addEventListener('contextmenu', preventContext);
            wrapper.addEventListener('contextmenu', preventContext);

            // Interactions

            item.addEventListener('mousedown', (e) => {
                if (e.button === 2) { // Right Click
                    e.preventDefault();
                    e.stopPropagation();
                    // Disable scale effect visually
                    item.classList.add('no-active');
                    handleSwipeStart(e);
                } else if (e.button === 0) { // Left Click
                    // md-ripple handles this
                }
            });

            item.addEventListener('touchstart', (e) => {
                handleSwipeStart(e.touches[0]);
            }, { passive: true });

            item.addEventListener('click', (e) => {
                if (e.button === 0 && !isSwiping) {
                    onCopy(parseInt(wrapper.dataset.index));
                }
            });

            // Context menu protection on both item and wrapper

        });

        if (currentSearchQuery) {
            filterAccounts(accounts, currentSearchQuery);
        }
    }
}

export function filterAccounts(accounts, query) {
    const currentSearchQuery = query.toLowerCase().trim();
    const clearBtn = document.getElementById('clearSearch');
    clearBtn.style.display = currentSearchQuery ? 'flex' : 'none';

    const accountItems = document.querySelectorAll('.account-item');
    const emptyState = document.getElementById('emptyState');
    const noResults = document.getElementById('noResults');
    const accountsList = document.getElementById('accountsList');

    let visibleCount = 0;

    accountItems.forEach((item, index) => {
        const account = accounts[index];
        if (!account) return;

        const searchText = `${account.name} ${account.issuer}`.toLowerCase();
        const isMatch = searchText.includes(currentSearchQuery);

        if (isMatch || !currentSearchQuery) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });

    if (accounts.length === 0) {
        emptyState.style.display = 'flex';
        noResults.style.display = 'none';
        accountsList.style.display = 'block';
    } else if (visibleCount === 0 && currentSearchQuery) {
        emptyState.style.display = 'none';
        noResults.style.display = 'flex';
        accountsList.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        noResults.style.display = 'none';
        accountsList.style.display = 'block';
    }
}

export function updateAllOTP(accounts) {
    accounts.forEach(async (account, index) => {
        const otpElement = document.getElementById(`otp-${index}`);
        if (otpElement) {
            try {
                const otp = await TOTP.generate(account.secretBase32 || account.secret);
                otpElement.innerText = otp.match(/.{1,3}/g).join(' ');
            } catch (err) {
                otpElement.innerText = 'Error';
            }
        }
    });
}

export function updateTimers(remaining) {
    const progress = (remaining / 30) * 62.83;
    const timers = document.querySelectorAll('.timer-progress');
    timers.forEach(timer => {
        timer.style.strokeDasharray = '62.83';
        timer.style.strokeDashoffset = (62.83 - progress).toString();
    });
}

export function openSettings() {
    const modal = document.getElementById('settingsModal');
    const input = document.getElementById('uriInput');
    const error = document.getElementById('modalError');

    modal.style.display = 'block';
    modal.offsetHeight;
    modal.classList.add('active');

    input.value = '';
    error.style.display = 'none';
}

export function closeSettings() {
    const modal = document.getElementById('settingsModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 200);
}

export function setModalError(message, type = 'error') {
    const errorEl = document.getElementById('modalError');
    if (!errorEl) return;

    errorEl.innerText = message;
    errorEl.style.color = type === 'error' ? 'var(--accent-danger)' : 'var(--accent-blue)';
    errorEl.style.display = 'block';

    setTimeout(() => {
        errorEl.style.display = 'none';
    }, 3000);
}

export function clearInputs(ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

export function setEditStatus(message, type = 'info') {
    const msgEl = document.getElementById('editMsg');
    if (!msgEl) return;

    msgEl.innerText = message;
    msgEl.style.color = type === 'error' ? 'var(--accent-danger)' : 'var(--accent-blue)';
    msgEl.style.display = 'block';

    setTimeout(() => {
        msgEl.style.display = 'none';
    }, 3000);
}

export function setGitHubStatus(message, type = 'info') {
    const msgEl = document.getElementById('githubMsg');
    if (!msgEl) return;

    msgEl.innerText = message;
    msgEl.style.color = type === 'error' ? 'var(--accent-danger)' : 'var(--accent-blue)';
    msgEl.style.display = 'block';

    setTimeout(() => {
        msgEl.style.display = 'none';
    }, 4000);
}

export function openConfirmModal({ title, message, confirmText, onConfirm, confirmColor, icon }) {
    const modal = document.getElementById('confirmModal');
    const titleEl = modal.querySelector('h3');
    const messageEl = document.getElementById('confirmMessage');
    const confirmBtn = document.getElementById('confirmDeleteBtn');
    const iconContainer = modal.querySelector('.material-icons').parentElement;
    const iconEl = modal.querySelector('.material-icons');

    titleEl.innerText = title;
    messageEl.innerText = message;

    // Update icon and color if provided
    if (icon) iconEl.innerText = icon;
    if (confirmColor) {
        confirmBtn.style.background = confirmColor;
        confirmBtn.classList.remove('btn-danger'); // Remove default red if custom color provided
        iconContainer.style.background = `${confirmColor}1a`; // 10% opacity for icon bg
        iconEl.style.color = confirmColor;
    } else {
        confirmBtn.style.background = ''; // Revert to CSS
        confirmBtn.classList.add('btn-danger');
        iconContainer.style.background = 'rgba(239, 68, 68, 0.1)';
        iconEl.style.color = '#ef4444';
        iconEl.innerText = 'help_outline';
    }

    // Update text
    const textEl = confirmBtn.querySelector('span');
    if (textEl) {
        textEl.innerText = confirmText;
    }

    confirmBtn.onclick = () => {
        onConfirm();
        closeConfirmModal();
    };

    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
}

export function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

export function renderDeleteList(accounts) {
    const container = document.getElementById('deleteList');
    const deleteBtn = document.getElementById('deleteSelectedBtn');
    const selectAll = document.getElementById('selectAllCheckbox');

    if (!container) return;
    if (selectAll) selectAll.checked = false;

    if (accounts.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#94a3b8; padding:10px;">No accounts available</div>';
        deleteBtn.style.display = 'none';
        if (selectAll) selectAll.disabled = true;
        return;
    }

    if (selectAll) selectAll.disabled = false;

    container.innerHTML = accounts.map((acc, idx) => `
    <label class="delete-list-item" data-idx="${idx}">
      <md-ripple></md-ripple>
      <div style="display: flex; align-items: center; gap: 12px;">
        <input type="checkbox" class="delete-checkbox" value="${idx}" style="width: 18px; height: 18px; cursor: pointer;">
        <div style="display: flex; flex-direction: column;">
            <span style="font-size: 14px; font-weight: 500; color: var(--text-primary);">${escapeHtml(acc.issuer || acc.name)}</span>
            ${acc.issuer && acc.name && acc.issuer !== acc.name ? `<span style="font-size: 11px; color: var(--text-secondary);">${escapeHtml(acc.name)}</span>` : ''}
        </div>
      </div>
    </label>
  `).join('');

    document.querySelectorAll('.delete-list-item').forEach(item => {
        // md-ripple handles this
    });

    deleteBtn.style.display = 'block';

    const checkboxes = document.querySelectorAll('.delete-checkbox');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(c => c.checked);
            if (selectAll) selectAll.checked = allChecked;
        });
    });

    if (selectAll) {
        selectAll.onchange = () => {
            checkboxes.forEach(cb => cb.checked = selectAll.checked);
        };
    }
}

export function renderEditList(accounts, onEditSelect) {
    const container = document.getElementById('editList');
    if (!container) return;

    if (accounts.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#94a3b8; padding:10px;">No accounts available to edit</div>';
        return;
    }

    container.innerHTML = accounts.map((acc, idx) => `
    <div class="edit-chip" data-idx="${idx}">
      <md-ripple></md-ripple>
      ${escapeHtml(acc.issuer || acc.name)}
    </div>
  `).join('');

    container.querySelectorAll('.edit-chip').forEach(item => {
        item.addEventListener('click', (e) => {
            onEditSelect(parseInt(item.dataset.idx));
        });
    });
}

/**
 * Issue 5: Optimized Drag & Drop updates
 * Updates the data-index and related IDs of all account items in the DOM
 */
export function updateDOMIndices() {
    const wrappers = document.querySelectorAll('.account-wrapper');
    wrappers.forEach((wrapper, idx) => {
        wrapper.dataset.index = idx;
        const item = wrapper.querySelector('.account-item');
        if (item) item.dataset.index = idx;
        const otpElement = wrapper.querySelector('.otp-code');
        if (otpElement) {
            otpElement.id = `otp-${idx}`;
        }
    });
}
