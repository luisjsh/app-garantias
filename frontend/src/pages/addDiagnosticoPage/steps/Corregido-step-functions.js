export const handleSubmitInputBox = (
    event,
    name,
    oldArrayName,
    oldArray,
    submitted,
    formData,
    setFormData,
    setBadNotification
) => {
    event.preventDefault();
    let DifferentsFromInput = oldArray.filter((item) => {
        return item.name !== submitted;
    });
    if (oldArray.length !== DifferentsFromInput.length)
        return setBadNotification(`${name} agregada previamente`);
    setFormData({
        ...formData,
        [oldArrayName]: [
            ...oldArray,
            {
                id: oldArray.length + 1,
                name: submitted,
            },
        ],
    });
};

export const handleClickTextInputBox = (event, oldArrayName, oldArray, formData, setFormData, setBadNotification) => {
    let {
        name
    } = event.target;
    if (!oldArray) return setBadNotification("Ya se encuetra eliminado");
    let resultArray = oldArray.filter((item) => item.id !== parseInt(name));
    setFormData({
        ...formData,
        [oldArrayName]: resultArray,
    });
};

export const deleteFormData = (event, formData, setFormData) => {
    event.preventDefault();
    let {
        name
    } = event.target;
    setFormData({
        ...formData,
        [name]: ""
    });
};

export const handleTestClick = (event, Data, ClickedData, DataName, setDATA) => {
    event.preventDefault();
    let {
        name
    } = event.target;
    let resultArray = ClickedData.map((item) => {
        if (item.id === parseInt(name)) {
            if (item.status === "APROBADO")
                return {
                    id: item.id,
                    name: item.name,
                    status: "DESAPROBADO",
                };
            if (item.status === "DESAPROBADO")
                return {
                    id: item.id,
                    name: item.name,
                    status: "APROBADO",
                };
        }
        return item;
    });
    setDATA({...Data, [DataName]:resultArray});
};