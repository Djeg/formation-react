import * as Ui from '../shared/ui'

type ProfileProps = {
  open?: boolean
  onClose: () => void
}

export default function Profile({ open, onClose }: ProfileProps) {
  return (
    <Ui.GreenRightFrame open={open}>
      <Ui.GreenFrameHeader>
        <Ui.GreenFrameClose
          className="fa-solid fa-circle-xmark"
          onClick={onClose}
        ></Ui.GreenFrameClose>
        <Ui.GreenFrameTitle>Mon Profil</Ui.GreenFrameTitle>
      </Ui.GreenFrameHeader>
    </Ui.GreenRightFrame>
  )
}
