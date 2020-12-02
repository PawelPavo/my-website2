import React from 'react';
import SwitchButton from "react-switch";
import { FaSun, FaMoon } from 'react-icons/fa';

function ToggleSwitch(props) {

    return (
        <>
            <SwitchButton
                offColor="#98b1c4"
                onColor="#adb6c0"
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "#f5e506",
                            paddingRight: 2,
                        }}
                    >
                        <FaSun />
                    </div>
                }
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "#FFFFFF",
                            paddingRight: 2
                        }}
                    >
                        <FaMoon />
                    </div>

                }
                className="react-switch"
                id="icon-switch"
                onChange={props.handleTheme}
                checked={props.checked} />
        </>
    );
}

export default ToggleSwitch;