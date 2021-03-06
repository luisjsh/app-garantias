module.exports = {
    SearchResult: {
        __resolveType(obj, context, info){
            if(obj.message) return "AuthMessage"
            if(obj.token) return "AuthData"
        }
    },
    DiagnosisResult: {
            __resolveType(obj, context, info) {
                if (obj.message) return "AuthMessage"
                if (obj.issue) return "Report"
            }
        },
        ReportsWrapper: {
                __resolveType(obj) {
                    if (obj.message) return 'AuthMessage'
                    if (obj.device) return 'DeviceList'
                }
    }
}