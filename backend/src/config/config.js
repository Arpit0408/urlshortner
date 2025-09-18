export const cookieOptions ={
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",  // Capitalized 'L'
maxAge: 1000 * 60 * 60 * 2, // 2 hours
}
