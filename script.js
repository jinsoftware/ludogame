body {
  font-family: sans-serif;
  text-align: center;
  background: #e0f7fa;
  margin: 0;
  padding: 0;
}

h1 {
  background: #ffd54f;
  padding: 10px;
  margin: 0;
}

.ludo-board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  max-width: 500px;
  margin: 30px auto;
}

.player {
  background: white;
  border: 3px solid #444;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}

.green { background: #a5d6a7; }
.red { background: #ef9a9a; }
.yellow { background: #fff59d; }
.blue { background: #90caf9; }

.dice {
  font-size: 30px;
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px auto;
  width: fit-content;
  cursor: pointer;
  box-shadow: 2px 2px 5px #444;
}

