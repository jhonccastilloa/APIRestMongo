const customHeader = (req, res, next) => {

  try {
    const {api_key}=req.headers
    if(api_key==='leifer-0-1'){
      next()
    }else{
      res.status(403).json({
        error: " incorrect api key  ",
      });
    }
  } catch (err) {
    res.status(403).json({
      error: "something goes wrong",
    });
  }
  // next()
};

module.exports = { customHeader };
