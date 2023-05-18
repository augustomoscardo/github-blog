import { LoaderContainer } from "./style";
import { ClipLoader } from 'react-spinners'

export function Loading() {
  return (
    <LoaderContainer>
      <ClipLoader loading={true} size={100} color="#3294F8" aria-label="Loading Spinner" />
    </LoaderContainer>
  )
}