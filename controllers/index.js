exports.getIndex = (req,res,next) => {

    const slackUsername = "abdullahi-ts";
    const backend = true;
    const age = 22;
    const bio = "I'm a nodejs backend developer based in Ile-ife Osun state.";


    res.status(200).json({
        slackUsername,backend,age,bio
    })
}

