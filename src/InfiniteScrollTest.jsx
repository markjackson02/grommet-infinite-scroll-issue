import React from 'react';
import { InfiniteScroll, Text } from 'grommet'

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const InfiniteScrollTest = () => {
    return (
        <InfiniteScroll items={allItems} step={10}>
            {(item, index) => (
                <Text as="div" key={index}>
                    {item}
                </Text>
            )}
        </InfiniteScroll>
    );
}

export default InfiniteScrollTest