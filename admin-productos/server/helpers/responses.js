export const successResponse = (req, res, data = '', code = 200) => {
    return res.status(code).json({
        success: true,
        data
    })
}