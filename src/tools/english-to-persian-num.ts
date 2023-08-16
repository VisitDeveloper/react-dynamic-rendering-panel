export function englishNumberToPersianNumber(text: string): string {
    const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return text.replace(/[0-9]/g, function (w) {
      return id[+w];
    });
  }
