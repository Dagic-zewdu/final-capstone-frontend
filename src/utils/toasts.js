export const showErrorToast = (err, toast) => toast(
  typeof err === 'string' ? err : err?.message, {
    appearance: 'error',
    autoDismiss: true,
  },
);

export const showSuccessToast = (message, toast) => toast(message, {
  appearance: 'success',
  autoDismiss: true,
});

export const showSuccessWarning = (message, toast) => toast(message, {
  appearance: 'warning',
  autoDismiss: true,
});
export const showsInfoToast = (message, toast) => toast(message, {
  appearance: 'info',
  autoDismiss: true,
});
