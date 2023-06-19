const parseEnv = () => {
    const envVariables = process.env;
    const rssVariables = Object.keys(envVariables).filter(key => key.startsWith("RSS_"));
    rssVariables.forEach(key => {
        console.log(key + `=${envVariables[key]}`);
    })
};

parseEnv();