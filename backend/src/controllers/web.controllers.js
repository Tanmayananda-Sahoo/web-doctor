async function analyzeWeb(req,res) {
    const {url} = req.body;
    return res.status(200)
    .json({
        url,
    })
}

export {
    analyzeWeb,
}