/* eslint-disable @typescript-eslint/no-explicit-any */
export function blobToFileConvertor<
GetFile extends { mime_type: string; file: string; name: string }
>(file: GetFile): File {
const dataUrl: string = `data:${file.mime_type};base64,${file.file}`;
const arr: Array<string> = dataUrl.split(",");
const mime = arr[0].match(/:(.*?);/)![1];
const bstr: string = atob(arr[1]);
let n: number = bstr.length;
const u8arr: Uint8Array = new Uint8Array(n);

while (n-- as any) {
  u8arr[n] = bstr.charCodeAt(n);
}

return new File([u8arr], file.name, { type: mime });
}
