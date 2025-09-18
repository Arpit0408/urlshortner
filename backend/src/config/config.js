export const cookieOptions ={
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",  // Capitalized 'L'
    maxAge: 1000 * 60 * 5,
}