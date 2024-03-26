import PropTypes from 'prop-types';

const Book = ({ book }) => {
    console.log(book);
    return (
        <div>
            
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;