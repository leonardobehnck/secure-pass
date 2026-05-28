export function generatePassword(): string {
  let generatePassword: string = "";
  let passwordLength: number = 16;
  let characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_-+=?";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex: number = Math.floor(Math.random() * characters.length);
    generatePassword += characters[randomIndex];
  }

  return generatePassword;
}
