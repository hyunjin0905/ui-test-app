import React, { useState } from "react";
import { Food } from "../page/food";

enum TabId {
    FOOD = "FOOD",
    ETC = "ETC"
}

const TabMenu = () => {

    return (
        <>
            <Food />
        </>
    )
}

export default TabMenu;