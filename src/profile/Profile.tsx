import * as Ui from '../shared/ui'

type ProfileProps = {
  open?: boolean
}

export default function Profile({ open }: ProfileProps) {
  return (
    <Ui.GreenRightFrame open={open}>
      <Ui.GreenFrameHeader>
        <Ui.GreenFrameClose className="fa-solid fa-circle-xmark"></Ui.GreenFrameClose>
        <Ui.GreenFrameTitle>Mon Profil</Ui.GreenFrameTitle>
      </Ui.GreenFrameHeader>
    </Ui.GreenRightFrame>
  )
}
