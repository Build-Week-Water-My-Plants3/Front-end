import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Header from "../../Header/header";
import { user } from "../../../store/actions";

const LoginRedirect = (props) => {
    const { name, recs, isFetching, fetchUser } = props;

    useEffect(() => {
        fetchUser(name);
    }, []);

    return (
        <div>
            <Header />
            {isFetching && "Loading..."}
            {!isFetching && !recs && (
                <div>
                    <h2>Recommendations not set.</h2>
                    <Link to="/preferences">Set Preferences Here</Link>
                </div>
            )}
            {recs && <Redirect to="/recommended" />}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.user.username,
        recs: state.user.recommendations,
        isFetching: state.user.isFetching,
    };
};

export default connect(mapStateToProps, {
    fetchUser: user.fetchUser,
})(LoginRedirect);