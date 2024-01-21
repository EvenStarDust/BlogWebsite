import React, { useState, useEffect, useRef } from "react";
import './IntroSection.css'

export const IntroSection = () => {
    const { word, stop, start, color } = useTypingText(
        [" ", "Evenstar Ekibi"],
        130,
        20,
    );
    return (
        <section>
            <div className="d-table w-100 text-start text-lg-center">
                <div className="div1">
                    <div className="container">
                        <h1 className="h1"><p>
                            <p>Merhaba Bilgi Sevdalıları! </p>
                            <br />
                            Evenstar dünyasına hoş geldiniz! Burası,
                            merakınızı tetikleyecek, sizi bilgiyle buluşturacak ve farklı
                            konularda keşifler yapmanıza olanak tanıyacak bir platform. Uzayın
                            derinliklerinden bilgisayar dünyasına, sıra dışı hayvan türlerinden
                            güncel sosyal medya trendlerine kadar pek çok konuda bilgiye açılan
                            kapı burada. Evenstar, herkesin ilgisini çekecek geniş bir içerik
                            yelpazesi sunuyor. Sitemizde kaybolurken, farklı konular hakkında
                            bilgi edinirken, ilginç ve eğlenceli detayları keşfederken zamanın
                            nasıl geçtiğini anlamayacaksınız. Yenilikçi yazılar, ilham verici
                            içerikler ve sizi düşündürecek makalelerle dolu olan sitemizde her gün
                            yeni bir şey öğrenme fırsatı sizi bekliyor. Bu platformda her şeyi
                            bulabilir, öğrenebilir ve paylaşabilirsiniz. Siz de Evenstar'a
                            katılarak, bilgi dolu bir dünyanın kapılarını aralayın. Unutmayın,
                            keşfetmek için asla geç değildir! Bilgi dolu günler dileriz!
                            <br /><br />
                            {word}</p></h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FORWARD = "forward";
const BACKWARD = "backward";

const useTypingText = (words, keySpeed = 1000, maxPauseAmount = 10, color = 'red') => {
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[wordIndex].split(""));
    const [isStopped, setIsStopped] = useState(false);
    const direction = useRef(BACKWARD);
    const typingInterval = useRef();
    const letterIndex = useRef();

    const stop = () => {
        clearInterval(typingInterval.current);
        setIsStopped(true);
    };

    useEffect(() => {
        // Start at 0
        let pauseCounter = 0;

        if (isStopped) return;

        const typeLetter = () => {
            if (letterIndex.current >= words[wordIndex].length) {
                direction.current = BACKWARD;

                // Begin pause by setting the maxPauseAmount prop equal to the counter
                pauseCounter = maxPauseAmount;
                return;
            }

            const segment = words[wordIndex].split("");
            setCurrentWord(currentWord.concat(segment[letterIndex.current]));
            letterIndex.current = letterIndex.current + 1;
        };

        const backspace = () => {
            if (letterIndex.current === 0) {
                const isOnLastWord = wordIndex === words.length - 1;

                setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
                direction.current = FORWARD;

                return;
            }

            const segment = currentWord.slice(0, currentWord.length - 1);
            setCurrentWord(segment);
            letterIndex.current = currentWord.length - 1;
        };

        typingInterval.current = setInterval(() => {
            // Wait until counter hits 0 to do any further action
            if (pauseCounter > 0) {
                pauseCounter = pauseCounter - 1;
                return;
            }

            if (direction.current === FORWARD) {
                typeLetter();
            } else {
                backspace();
            }
        }, keySpeed);

        return () => {
            clearInterval(typingInterval.current);
        };
    }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount, isStopped]);

    return {
        word: (
            <span style={{ color: color }}>
                <span>{currentWord.length ? currentWord.join("") : ""}</span>
            </span>
        ),
        start: () => setIsStopped(false),
        stop
    };
};
