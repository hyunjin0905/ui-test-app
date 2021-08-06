import React, { FC, useEffect, useRef, forwardRef, useState } from "react";
import DotButton from "../assets/image/dotButton.png";
import { createUseStyles } from "react-jss";
import styled from "styled-components";




interface PieInfos {
    title: string;
    color: string;
}

interface PieProps {
    infos: PieInfos[],
    degree: number

}

const Button = styled.button`
    background-image: url('${DotButton}');
    width: 80px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 10%;
   
`

const Pie: FC<PieProps> = ((props) => {
    const { infos, degree } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        draw()
    })
    const classes = useStyle();

    const draw = () => {
        const ctxDiv = canvasRef.current
        const ctxCanvas = ctxDiv?.getContext("2d")!
        const ctxCanvas_width = ctxDiv?.width
        const ctxCanvas_height = ctxDiv?.height
        let angle = (2 * Math.PI) / infos.length;
        const center_x = ctxCanvas_width? ctxCanvas_width / 2 : 0;
        const center_y = ctxCanvas_height? ctxCanvas_height / 2 : 0;

        for (let i = 0; i < infos.length; i++) {
            const realAngle = (360 / 10) * i + 17;
            const x = Math.round(230 + Math.cos(realAngle * ( Math.PI / 180)) * 100);
            const y = Math.round(230 + Math.sin(realAngle * ( Math.PI / 180)) * 100);
            ctxCanvas.fillStyle = infos[i].color;
            ctxCanvas.beginPath(); // 새경로를 만듬
            ctxCanvas.moveTo(center_x, center_y);
            // (x,y, 반지름, 시작각도, 마지막각도
            ctxCanvas.arc(center_x, center_y, 250, angle * i, angle * (i + 1), false);
            ctxCanvas.lineTo(center_x, center_y);
            ctxCanvas.fill();
            ctxCanvas.textAlign = "center";
            ctxCanvas.fillStyle = "black";
            ctxCanvas.font = "16px Arial";
            ctxCanvas.fillText(infos[i].title, x + 20, y + 20, 500);

        }
    }



    return (
        <div className="roulette">
            <div style={{transform: `rotate(${degree}deg)`, transition: "transform 5s" }}>
                <canvas ref={canvasRef}
                        width={500}
                        height={500}
                        className={classes.root}>
                </canvas>
            </div>
            <Button className="dotButton" />
        </div>

    )
})

const useStyle = createUseStyles({
    root: {
        display: "block",
        margin: "0 auto"
    }

})



export default Pie;