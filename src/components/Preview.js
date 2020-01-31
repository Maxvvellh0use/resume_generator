import React from "react";

const Preview = props => {
        return (
            <div className="example-editor-container">
                <div className="thumbnail-container">
                    <section id="preview-container" className="pdf-paper">
                        <header className="preview-header section-clearfix">
                            <h1 className="user-name" id="user-name">Artyom Zdarova</h1>
                        </header>
                        <span> {props.submit} </span>
                    </section>
                </div>
            </div>
        );
};

export default Preview