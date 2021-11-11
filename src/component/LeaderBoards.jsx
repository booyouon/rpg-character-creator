import Sprite from "./sprite/Sprite";
import {
  TableContainer,
  Table,
  Paper,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const LeaderBoards = ({ API_URL }) => {
  const [rankings, setRankings] = useState([]);
  useEffect(() => {
    const fetchTop10 = async () => {
      const res = await axios.get(
        `${API_URL}&sort%5B0%5D%5Bfield%5D=highscore&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=10`
      );
      console.log(res.data.records);
      setRankings(res.data.records);
    };
    fetchTop10();
  }, [API_URL]);

  const spriteStyling = {
    width: "60px",
    margin: "0",
    padding: "0",
  };

  return (
    <TableContainer
      style={{
        width: "80vw",
        margin: "0 auto",
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableBody>
          {rankings.length
            ? rankings.map((rank, idx) => (
                <TableRow
                  key={rank.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {idx + 1}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Sprite
                      style={spriteStyling}
                      capColor={rank.fields.capcolor}
                      faceColor={rank.fields.facecolor}
                      capShading={rank.fields.capshading}
                      faceShading={rank.fields.faceshading}
                      eyeColor={rank.fields.eyecolor}
                      cheeksColor={rank.fields.cheekscolor}
                      dotColor={rank.fields.dotcolor}
                    />
                  </TableCell>
                  <TableCell align="center">{rank.fields.nickname}</TableCell>
                  <TableCell align="center">{rank.fields.highscore}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderBoards;
