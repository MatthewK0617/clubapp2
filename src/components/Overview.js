import React from "react";
import { Link, Router } from "@reach/router";
import { directoryData } from "./DirectoryData";
import { index } from "./Directory";
import "./MoreInfo.css";

function Overview() {
  return (
    <div>
        <div>
            <h1>
                Non-Profits
                (comprehensive list)
            </h1>
        </div>
        <div>
            <h1>
                Clubs
                (filter by school)
            </h1>
        </div>
        <div>
            <h1>
                Other
                (random activities?)
            </h1>
        </div>
    </div>
  );
}

export default Overview;
