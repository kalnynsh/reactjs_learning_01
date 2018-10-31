import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ShowPreview.css';

class ShowPreview extends Component {
    render() {
        const { name, image, summary, id } = this.props;

        return (
            <div className="t-preview">
                <div className="t-image">
                    <Link to={`/shows/${id}`} className="t-image__link">
                        <h3>{name}</h3>
                    </Link>
                    {image && (
                        <img
                            src={image.medium}
                            alt={name}
                            className="t-image__content"
                        />
                    )}
                </div>
                <div className="t-preview__description"
                        dangerouslySetInnerHTML={{ __html: summary }}
                >
                </div>
            </div>
        );
    }
}

export default ShowPreview;
