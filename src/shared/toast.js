export const showErrorToast = (err, toast) => toast(err?.message, {
  appearance: 'error',
  autoDismiss: true,
});

export const showSuccessToast = (message, toast) => toast(message, {
  appearance: 'success',
  autoDismiss: true,
});

export const showSuccessWarning = (message, toast) => toast(message, {
  appearance: 'warning',
  autoDismiss: true,
});
