const validation = (check) => {
    if(check != 0 && check != '' && typeof 'number') {
        return true;
    }

    return false;
};

export { validation };