import React, { useEffect } from "react";
import { connect } from "react-redux";
import StyledList from "./StyledList";
import PlantCard from "../Plants/PlantCard";
import Header from "../Header/header";
import Plants from '../Plants/plants'
import { plants } from "../../store/actions";

const PlantList = (props) => {
    /**
     * props: {plantList, isFetching}
     */
    const { isFetching, plantList, fetchPlants } = props;
    useEffect(() => {
        if (!plantList) fetchPlants();
    }, []);
    return (
        <StyledList>
            <Header />
            <div>
                {isFetching ? (
                    "loading..."
                ) : (
                        <>
                            {plantList &&
                                plantList.map((plant) => {
                                    return <PlantCard plant={plant} />;
                                })}
                        </>
                    )}
            </div>
        </StyledList>
    );
};

const mapStateToProps = (state) => {
    return {
        plantList: state.plants.plants,
        isFetching: state.plants.isFetching,
    };
};

export default connect(mapStateToProps, {
    fetchPlants: plants.fetchPlants,
})(PlantList);