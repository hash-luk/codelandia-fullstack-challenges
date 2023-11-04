import useNews from "../../services/hooks/useNews";

export default function NewsList() {
    const {data, isLoading, error} = useNews();

    if(isLoading) {
        console.log("loading")
        return
    }

    if(error) {
        console.log("error")
        return
    }

    console.log(data);

    return (
        <div>
            
        </div>
    );
}



