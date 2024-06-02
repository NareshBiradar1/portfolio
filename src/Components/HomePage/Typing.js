import React, { useState, useEffect } from 'react';

function Typing({
    text,
    typingSpeed = 100,
    deletingSpeed = 50
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Function to handle typing and deleting logic
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[index].length) {
                    setDisplayedText(prev => prev + text[index].charAt(displayedText.length));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(prev => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setIndex(prev => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed]);

    return (
        <div className="typing-effect">
            <p id="displayedText" style={{ fontSize: '1.5rem' }}>{displayedText}</p>
        </div>
    );
}

export default Typing;
