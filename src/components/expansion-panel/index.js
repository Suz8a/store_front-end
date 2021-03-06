import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import DynamicTable from "../dynamic-table";
import { PresupuestoDetails } from "./styled";

const useStyles = makeStyles(theme => ({
  root: { width: "20%" },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const data22 = [
  {
    Motivo: "10gr de Oro",
    Costo: "$1000"
  },
  { Motivo: "10gr de Plata", Costo: "$800" }
];

function ExpancionPanel(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const materiales = props.material_utilizar;
  const hechura = props.hechura;
  const data = [];

  function onRowClick() {}

  materiales.map(material => {
    if (material.gramos != 0)
      data.push({
        Motivo: `${material.gramos}gr de ${material.nombre_material}`,
        Costo: `$ ${material.precio}`
      });
  });
  data.push({ Motivo: "Hechura", Costo: `$ ${hechura}` });

  console.log(data);

  return (
    <div className={classes.root}>
      <PresupuestoDetails
        style={{ width: "256px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
        >
          <Typography className={classes.heading}>Cobro Total:</Typography>
          <Typography className={classes.secondaryHeading}>
            $ {props.cantidad}{" "}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ width: "539px" }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <DynamicTable data={data} onRowClick={onRowClick} />
          </Grid>
        </ExpansionPanelDetails>
      </PresupuestoDetails>
    </div>
  );
}

export default ExpancionPanel;
