//DEPENDENCIES
import React, { Component }           from 'react'

//COMPONENTS
import MapBackground                  from '../mapbox/MapBackground'
import Button1                        from '../common/buttons/Button1'

//Landing page
class NewGame extends Component {
  constructor(props){
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
  }

  onChangeInput(e) {
    this.props.changeGameTitle(e.target.value.toUpperCase())
  }

  //Upon mounting select the title so user knows it can be changed
  //Might have to remove this in mobile because a text pad would pop up
  componentDidMount() {
    this.input.focus()
    let selectionStart = this.input.value.length * 2
    this.input.setSelectionRange(selectionStart, selectionStart)
  }

  render() {
    return (
      <div className="newgame__holder">

        <div className="newgame__overlay">
          <div className="newgame__grid">
            <div className="text__holder">
              <input
                ref={el => this.input = el}
                type="text"
                className="input__titlescreen"
                onChange={e=>{this.onChangeInput(e)}}
                maxLength="7"
                value={this.props.game.title}
              ></input>
            <h1 className="noselect">WHERE IS IT?</h1>
            </div>
            <Button1 name={'START'}></Button1>
          </div>
        </div>

        <MapBackground />
      </div>
    )
  }
}

export default NewGame
