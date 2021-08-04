import React, { useState } from "react";
import { Food } from "../page/food";

enum TabId {
    FOOD = "FOOD",
    PIANO = "PIANO"
}

const TabMenu = () => {

    return (
        <>
            <Food />
        </>
    )
}

export default TabMenu;