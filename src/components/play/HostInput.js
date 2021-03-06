//DEPENDENCIES
import React                          from 'react'
import PropTypes                      from 'prop-types'

//COMPONENTS
import Button1                        from '../common/buttons/Button1'


const HostInput = (props) => (
  <div className="hostinput__holder">
    {!props.parity() && !props.state.game.completed ?
      <div className="hostinput__buttons">
        <Button1 click={e=>props.submitChat(e, "Yes", props)} fontSize="2em" name="Yes" />
        <Button1 click={e=>props.submitChat(e, "No", props)} fontSize="2em" name="No" />
        <Button1 click={e=>props.submitChat(e, "Idk", props)} fontSize="2em" name="Idk" />
      </div>:
      <div className="hostinput__buttons">
        <Button1 className="button__one button__one__deactive" fontSize="2em" name="Yes" />
        <Button1 className="button__one button__one__deactive" fontSize="2em" name="No" />
        <Button1 className="button__one button__one__deactive" fontSize="2em" name="Idk" />
      </div>
    }
  </div>
)

HostInput.propTypes = {
  props: PropTypes.object,
}

export default HostInput
