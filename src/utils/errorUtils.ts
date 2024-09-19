export const handleError = (
  error: any,
  setError: (msg: string | null) => void
) => {
  setError(
    error.code === "ERR_BAD_REQUEST"
      ? "نام کاربری یا رمز عبور اشتباه می باشد."
      : "خطایی در ارسال درخواست به موجود آماده است."
  );

  setTimeout(() => {
    setError(null);
  }, 3000);
};
