// wrapper
const withDefaultValue = (target, defaultValue = 0) =>{
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
};

const position = withDefaultValue({
    x:25,
    y:30
}, 0);


// hidden property
const withHiddenProps = (target, prefixs = "_") =>{
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefixs)),
        ownKeys: (obj) => Reflect.ownKeys(obj)
    });

}