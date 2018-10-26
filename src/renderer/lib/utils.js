import StatusInfo from '../config/status'
export const checkStatus = (data) => {
    if (data.status === 'success') {
        $$$.$Notice.success({
            title: StatusInfo[data.code] ? StatusInfo[data.code] : data.code,
            desc: data.message
        })
        return true
    } else {
        $$$.$Notice.error({
            title: StatusInfo[data.code] ? StatusInfo[data.code] : data.code,
            desc:  data.message
        })
        return false
    }
}
