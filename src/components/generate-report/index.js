import React from 'react'
import Description from "../description";
import Typography from "@material-ui/core/Typography";
import ThemedButton from "../button";

function GenerateReport() {
    return (
        <div style={{width: "763px", height:"435px"}}>
            <div>
                <Typography variant="h6" style={{ fontSize: "25px", paddingBottom: "40px" }}>
                    Generar Reporte
                </Typography>
                <Description style={{width: "709px", height:"222px", margin:"27px 101px 28px 112px"}}/>
            </div>
            <div style={{paddingLeft:"250px"}}>
                <ThemedButton
                    marginR="30px"
                    buttonSize="120px"
                    variantType="outlined"
                    text="Cancelar"
                    colorTheme="secondary"/>
                <ThemedButton
                    buttonSize="168px"
                    variantType="contained"
                    text="Guardar"
                    colorTheme="primary"/>
            </div>
        </div>
    )
}

export default GenerateReport
