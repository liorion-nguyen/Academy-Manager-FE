import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Slide, SlideProps } from "@mui/material";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function SimpleSnackbar({ notify, setNotify }: any) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({ open: false, message: "", severity: "" });
    
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={notify.open}
        autoHideDuration={1200}
        TransitionComponent={SlideTransition}
        onClose={handleClose}
        action={action}
        color="success"
      >
        <Alert
          onClose={handleClose}
          severity={notify.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {notify.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
