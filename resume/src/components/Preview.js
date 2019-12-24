import React from "react";

class Preview extends React.Component {

    render() {
        return (
            <div className="example-editor-container">
                <div className="thumbnail-container">
                    <section id="preview-container" className="pdf-paper">
                        <header className="preview-header section-clearfix">
                            <h1 className="user-name" id="user-name">Artyom Zdarova</h1>
                        </header>
                    </section>
                </div>
            </div>
        );
    }
}

export default Preview