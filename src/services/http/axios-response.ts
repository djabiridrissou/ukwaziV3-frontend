export const retriveAxiosSuccessResponse = (res: any) => {
    return {
        status: res.status,
        message: res.data.message,
        data: res.data.data,
    }
};

export const retriveAxiosErrorResponse = (res: any) => {
    if (res.response.status == 401) {
        location.href = "/";
    }
    return {
        status: res.response.status,
        message: res.response.message,
    }
};