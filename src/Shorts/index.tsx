import {
  FlatList,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  View,
} from 'react-native';
import React, {memo, useCallback, useRef, useState} from 'react';

import ShortItem from './Item';
import uuid from 'react-native-uuid';

type Item<T> = T & {url: any}; // Changed to any to support both string URLs and require() for local files

export type ShortsProps<T> = {
  items: Item<T>[];
  onLoadNextRequired?: () => void;
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null | undefined;
  itemRowCount?: number;
  isLoadingNext?: boolean;
  onRefresh?: () => void;
  onLike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (url: string) => void;
  onFollow?: (userId: string) => void;
  onList?: (userId: string) => void;
};

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 50,
};

function Shorts<T>(props: ShortsProps<T>): JSX.Element {
  const flatListRef = useRef<FlatList>(null);
  const {items, onEndReached, onRefresh, onLike, onComment, onShare, onFollow} = props;
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [layout, setLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const onViewRef = useRef((viewableItems: any) => {
    if (viewableItems?.viewableItems?.length > 0) {
      const index = viewableItems?.viewableItems?.[0]?.index;
      setVisibleIndex(index);
    }
  });

  return (
    <View
      style={styles.container}
      onLayout={(e: LayoutChangeEvent) => {
        setLayout(e.nativeEvent.layout);
      }}>
      <FlatList
        ref={flatListRef}
        data={items}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // @ts-ignore
        keyExtractor={item => item?.id || uuid.v4().toString()}
        refreshing={false}
        onRefresh={() => onRefresh?.()}
        onEndReached={onEndReached}
        decelerationRate="fast"
        renderItem={useCallback(
          ({item, index}: {item: Item<T>; index: number}) => {
            return (
              <ShortItem
                index={index}
                url={item.url}
                paused={index !== visibleIndex}
                layout={layout}
                playing={index === visibleIndex}
                visible={index === visibleIndex}
                item={item}
                onLike={onLike}
                onComment={onComment}
                onShare={onShare}
                onFollow={onFollow}
              />
            );
          },
          [layout, visibleIndex, onLike, onComment, onShare, onFollow],
        )}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignSelf: 'stretch'},
});

export default memo(Shorts);
