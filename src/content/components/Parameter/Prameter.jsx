const Parameter = () => {
    const href_ = window.location.pathname;
    const parameterFirst = href_.slice(href_.indexOf('/') + 1);
    const parameterLast = href_.slice(href_.lastIndexOf('/') + 1);
    return { parameterFirst, parameterLast };
}
export default Parameter;