import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

function MaterialUsado() {
<<<<<<< HEAD
    return (
        <div>
            <Grid container direction = "column" justify = "center" alignItems = "flex-start">
                <Typography variant = "h6" component = "h2"> Material a Utilizar </Typography>
                <Grid container direction = "row" justify = "flex-start" alignItems = "flex-start">
                    <Grid  item  direction="row"  justify="flex-start"  alignItems="center" style = {{paddingRight: "15px"}}>
                        <TextField label = "Oro (gr)" type= "number" style = {{width:"170px", paddingRight: "15px"}}/>
                        <Input placeholder="$1000" type= "number" style = {{width: 70, paddingTop: "16px"}}/>
                    </Grid>
                    <Grid  item  direction="row"  justify="flex-start"  alignItems="center" style = {{paddingRight: "15px"}}>
                        <TextField label = "Bronce (gr)" type= "number"style = {{width:"170px", paddingRight: "15px"}}/>
                        <Input placeholder="$1000" type= "number" style = {{width: 70 ,paddingTop: "16px"}}/>
                    </Grid>
                </Grid>
                <Grid container direction = "row" justify = "flex-start" alignItems = "flex-start">
                    <Grid  item  direction="row"  justify="flex-start"  alignItems="center" style = {{paddingRight: "15px"}}>
                        <TextField label = "Plata (gr)" type= "number" style = {{width:"170px", paddingRight: "15px"}}/>
                        <Input placeholder="$1000" type= "number" style = {{width: 70 ,paddingTop: "16px"}}/>
                    </Grid>    
                    <Grid  item  direction="row"  justify="flex-start"  alignItems="center" style = {{paddingRight: "15px"}}>
                        <TextField label = "Acero Inoxidable (gr)" type= "number"style = {{width:"170px", paddingRight: "15px" }}/>
                        <Input placeholder="$1000" type= "number" style = {{width: 70 ,paddingTop: "16px"}}/> 
                    </Grid>
                </Grid>
            </Grid >
        </div>
    )
=======
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Typography variant="h6" component="h2" style={{ color: "#546E7ADE" }}>
          {" "}
          Material a Utilizar{" "}
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid
            item
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ paddingRight: "15px" }}
          >
            <TextField
              label="Oro (gr)"
              type="number"
              style={{ width: "170px", paddingRight: "15px" }}
            />
            <Input
              placeholder="$"
              type="number"
              style={{ width: 70, paddingTop: "16px" }}
            />
          </Grid>
          <Grid
            item
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ paddingRight: "15px" }}
          >
            <TextField
              label="Bronce (gr)"
              type="number"
              style={{ width: "170px", paddingRight: "15px" }}
            />
            <Input
              placeholder="$"
              type="number"
              style={{ width: 70, paddingTop: "16px" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid
            item
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ paddingRight: "15px" }}
          >
            <TextField
              label="Plata (gr)"
              type="number"
              style={{ width: "170px", paddingRight: "15px" }}
            />
            <Input
              placeholder="$"
              type="number"
              style={{ width: 70, paddingTop: "16px" }}
            />
          </Grid>
          <Grid
            item
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ paddingRight: "15px" }}
          >
            <TextField
              label="Acero Inoxidable (gr)"
              type="number"
              style={{ width: "170px", paddingRight: "15px" }}
            />
            <Input
              placeholder="$"
              type="number"
              style={{ width: 70, paddingTop: "16px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
>>>>>>> cb0baffba6eca5963f3a3a3f23a9284eb53705c7
}

export default MaterialUsado;
