import { useParams } from "react-router-dom";

export default function Completed() {
    const { data } = useParams();

    return <div>
        {{ data }} completed...
    </div>
}