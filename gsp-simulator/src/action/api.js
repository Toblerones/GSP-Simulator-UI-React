import { connect } from 'react-redux'

import {
    setEndpointHost,
    setEndpointPath,
    setHeader,
    readEndpoint,
    createEntity,
    updateEntity,
    deleteEntity
} from "redux-json-api"


const sendReq = (host, path, data, endpoint, reqType) => {
    dispatch(setEndpointHost(host))
    dispatch(setEndpointPath(path))
    if (reqType === "GET") {
        dispatch(readEndpoint(endpoint))
    }
    if (reqType === "POST") {
        dispatch(createEntity(JSON.parse(data)))
    }
    if( reqType === "PATCH") {
        dispatch(updateEntity(JSON.parse(data)))
    }
    if( reqType === "DELETE") {
        dispatch(deleteEntity(JSON.parse(data)))
    }
}

// const Container = connect(mapStateToProps, mapDispatchToProps)(App)

// export default Container
