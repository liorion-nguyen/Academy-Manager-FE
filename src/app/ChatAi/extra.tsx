import Image from "next/image";
import { StyleInpSearch } from "../style-mui";
import { StyleColumnGap5, StyleDetailChat, StyleExtraAvater, StyleExtraContent, StyleExtraLi, StyleExtraName, StyleExtraTitle, StyleRowGap10, StyleSearchChat } from "./style-mui";

export default function ChatAiExtra() {
    return (
        <StyleDetailChat>
            <StyleExtraTitle>Đoạn chat</StyleExtraTitle>
            <StyleSearchChat className="search">
                <img src="/Images/admin/icon_search.svg" />
                <StyleInpSearch type="text" placeholder="Search..." />
            </StyleSearchChat>
            <ul>
                <StyleExtraLi>
                    <StyleRowGap10>
                        <StyleExtraAvater src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/398976089_757060773101846_5641531812183543884_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wExuFgOLETwAX8jR405&_nc_ht=scontent.fhan15-2.fna&oh=00_AfCwWXhlJgzaIgPxBx5JH4tgLHg2gQIXq4VfOhi51a9ehg&oe=660AC870" />
                        <StyleColumnGap5>
                            <StyleExtraName>Liorion Chat</StyleExtraName>
                            <StyleExtraContent>You: Hello  16:49</StyleExtraContent>
                        </StyleColumnGap5>
                    </StyleRowGap10>
                </StyleExtraLi>
                <StyleExtraLi>
                    <StyleRowGap10>
                        <StyleExtraAvater src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/398976089_757060773101846_5641531812183543884_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wExuFgOLETwAX8jR405&_nc_ht=scontent.fhan15-2.fna&oh=00_AfCwWXhlJgzaIgPxBx5JH4tgLHg2gQIXq4VfOhi51a9ehg&oe=660AC870" />
                        <StyleColumnGap5>
                            <StyleExtraName>Liorion Chat</StyleExtraName>
                            <StyleExtraContent>You: Hello  16:49</StyleExtraContent>
                        </StyleColumnGap5>
                    </StyleRowGap10>
                </StyleExtraLi>
            </ul>
        </StyleDetailChat>
    );
}