<template>
  <div class="ohmcalc">
    <div class="triangle-up">
      <input v-model="voltage" placeholder="Spannung" class="voltage-input"/>
      <select @change="voltagePowerChange()" class="voltage-dropdown" v-model="voltagePower">
        <option disabled value="">Bitte w&auml;hle Einheit</option>
        <option>Nano</option>
        <option>Mikro</option>
        <option>Milli</option>
        <option>Kilo</option>
        <option>Mega</option>
        <option>Giga</option>
      </select>
      <input v-model="resistance" placeholder="Widerstand" class="resistance-input"/>
      <select @change="resistancePowerChange()" class="resistance-dropdown" v-model="resistancePower">
        <option disabled value="">Bitte w&auml;hle Einheit</option>
        <option>Nano</option>
        <option>Mikro</option>
        <option>Milli</option>
        <option>Kilo</option>
        <option>Mega</option>
        <option>Giga</option>
      </select>
      <input v-model="current" placeholder="Strom" class="current-input"/>
      <select @change="amperePowerChange()" class="ampere-dropdown" v-model="amperePower">
        <option disabled value="">Bitte w&auml;hle Einheit</option>
        <option>Nano</option>
        <option>Mikro</option>
        <option>Milli</option>
        <option>Kilo</option>
        <option>Mega</option>
        <option>Giga</option>
      </select>
      <button @click="calculate" class="calcButton" type="button">Berechnen</button>
      <button @click="reset" class="resetButton" type="button">Reset</button>
    </div>
    <label class="powerLabel" for="powerInput">Leistung: </label>
    <input id="powerInput" class="power" v-model="power"/>
  </div>

</template>

<script>
export default {
  name: 'OhmCalculator',
  props: {
    msg: String
  },
  data() {
      return {
        voltage: undefined,
        resistance: undefined,
        current: undefined,
        power: 0.0,
        voltagePower: "",
        resistancePower: "",
        amperePower: "",
        amperePowers: ['Nano','Mikro','Milli','Kilo','Mega','Giga'],
        resistancePowers: ['Nano','Mikro','Milli','Kilo','Mega','Giga'],
        voltagePowers: ['Nano','Mikro','Milli','Kilo','Mega','Giga']
      }
  },
  computed: {

  },
  methods: {
    voltagePowerChange(){
        if(this.voltagePower == 'Nano') this.voltage = this.voltage * 1000000000;
        if(this.voltagePower == 'Mikro') this.voltage = this.voltage * 1000000;
        if(this.voltagePower == 'Milli') this.voltage = this.voltage * 1000;
        if(this.voltagePower == 'Kilo') this.voltage = this.voltage / 1000;
        if(this.voltagePower == 'Mega') this.voltage = this.voltage / 1000000;
        if(this.voltagePower == 'Giga') this.voltage = this.voltage / 1000000000;
    },
    resistancePowerChange(){
        if(this.resistancePower == 'Nano') this.resistance = this.resistance * 1000000000;
        if(this.resistancePower == 'Mikro') this.resistance = this.resistance * 1000000;
        if(this.resistancePower == 'Milli') this.resistance = this.resistance * 1000;
        if(this.resistancePower == 'Kilo') this.resistance = this.resistance / 1000;
        if(this.resistancePower == 'Mega') this.resistance = this.resistance / 1000000;
        if(this.resistancePower == 'Giga') this.resistance = this.resistance / 1000000000;
    },
    amperePowerChange(){
        if(this.amperePower == 'Nano') this.current = this.current * 1000000000;
        if(this.amperePower == 'Mikro') this.current = this.current * 1000000;
        if(this.amperePower == 'Milli') this.current = this.current * 1000;
        if(this.amperePower == 'Kilo') this.current = this.current / 1000;
        if(this.amperePower == 'Mega') this.current = this.current / 1000000;
        if(this.amperePower == 'Giga') this.current = this.current / 1000000000;
    },
    calculate(){
        if((this.voltage == 0 || this.voltage == undefined) && this.resistance > 0 && this.current > 0){
            this.voltage = this.resistance * this.current;
        } else if(( this.resistance == 0|| this.resistance == undefined) && this.voltage > 0 && this.current > 0){
            this.resistance = this.voltage / this.current;
        }else if((this.current == 0 || this.current == undefined) && this.resistance > 0 && this.voltage > 0){
            this.current = this.voltage / this.resistance;
        }

        if(this.voltage != undefined && this.current != undefined)
          this.power = this.voltage * this.current;
    },
    reset(){
        this.voltage = undefined;
        this.resistance = undefined;
        this.current = undefined;
        this.voltagePower = "";
        this.amperePower = "";
        this.resistancePower = "";
        this.power = 0;
    }
  },
  watch: {

  }
}
</script>
<style scoped>
select.voltage-dropdown {
  left: -165px;
  height: 30px;
  width: 160px;
  top: -40px;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
  position: absolute;
}


.current-input{
    position: absolute;
    top: 380px;
    left: 280px;
    height: 30px;
    width: 180px;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
}

.powerLabel{
  position: absolute;
  top: 600px;
  left: 330px;
  font-size: 16px;
  font-weight: 600;
}

.ohmcalc{
  position: relative;
}

.voltage-input{
  position: absolute;
  top: -40px;
  left: 5px;
  height: 30px;
  width: 100px;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
}

.resistance-input{
    position: absolute;
    top: 380px;
    right: 120px;
    height: 30px;
    width: 180px;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
}

.power{
  position: absolute;
  top: 600px;
  left: 420px;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
}

select.resistance-dropdown {
  position: absolute;
  top: 380px;
  right: 320px;
  height: 30px;
  width: 155px;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
}

select.ampere-dropdown {
    position: absolute;
    top: 380px;
    left: 115px;
    height: 30px;
    width: 155px;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
}

.header{
    height: 80px;
    text-align: center;
    font-family: cursive;
    font-size: 3rem;
    color: cornflowerblue;
    background-color: aliceblue;
    border: 1px solid;
}

.triangle-up {
	width: 0;
	height: 0;
	border-left: 200px solid transparent;
	border-right: 200px solid transparent;
	border-bottom: 340px solid #555;
    position: relative;
    top: 100px;
    margin: auto;
}

input {
    padding-left: 10px;
}

.calcButton{
    position: absolute;
    top: 200px;
    height: 50px;
    width: 100px;
    left: -45px;
    outline: none;
    background-color: lightgreen;
    font-size: 15px;
    font-weight: 600;
    border-radius: 30px;
}

.resetButton{
    position: absolute;
    top: 150px;
    height: 50px;
    width: 100px;
    left: -45px;
    outline: none;
    background-color: salmon;
    font-size: 15px;
    font-weight: 600;
    border-radius: 30px;
}

</style>
